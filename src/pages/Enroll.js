import React, { useState, Fragment } from "react";
import {
	GoogleFormProvider,
	useGoogleForm,
	useShortAnswerInput,
	useCheckboxInput,
	useRadioInput,
	useLongAnswerInput,
	useRadioGridInput,
	useCheckboxGridInput,
	useDropdownInput,
} from "react-google-forms-hooks";
import form from "../scripts/enroll_form.json";
import {
	Box,
	Button,
	TextField,
	Typography,
	Grid,
	InputLabel,
	FormControl,
	Select,
	MenuItem,
	FormHelperText,
} from "@mui/material";
import Loader from "../components/Loader";
import EnrollFormAlert from "../components/EnrollFormAlert";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

// Map field types to their corresponding input hooks
const inputHooks = {
	CHECKBOX: useCheckboxInput,
	RADIO: useRadioInput,
	SHORT_ANSWER: useShortAnswerInput,
	LONG_ANSWER: useLongAnswerInput,
	RADIO_GRID: useRadioGridInput,
	CHECKBOX_GRID: useCheckboxGridInput,
	DROPDOWN: useDropdownInput,
};

// Generate input hooks for each field
const createInputs = (fields) => {
	const inputs = {};
	fields.forEach((field) => {
		const fieldLabel = transformString(field.label);
		const inputHook = inputHooks[field.type];
		if (inputHook) {
			inputs[fieldLabel] = inputHook(field.id);
		}
	});
	return inputs;
};

const transformString = (str) => str.toLowerCase().replace(/\s/g, "_");

const convertFormDataToIds = (formData, excludeFields = []) => {
	const convertedData = {};
	for (const fieldLabel in formData) {
		if (!excludeFields.includes(fieldLabel)) {
			const fieldId = getFormFieldIdByLabel(fieldLabel);
			convertedData[fieldId] = formData[fieldLabel];
		}
	}
	return convertedData;
};

const getFormFieldIdByLabel = (label) => {
	const field = form.fields.find(
		(field) => transformString(field.label) === label
	);
	return field ? field.id : "";
};

const capitalizeFirstLetter = (str) => {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const FormInputs = ({
	formData,
	setFormData,
	formErrors,
	setFormErrors,
	reset,
}) => {
	const getInput = createInputs(form.fields);

	const handleInputChange = (fieldLabel, value) => {
		setFormData({ ...formData, [fieldLabel]: value });
		setFormErrors({ ...formErrors, [fieldLabel]: "" });
		reset();
	};

	return (
		<Grid container spacing={3}>
			{form.fields.map((field) => {
				const fieldLabel = transformString(field.label);
				const { register, label, description, id, options, error } =
					getInput[fieldLabel];

				let error_message = `${label} is required. Please fill it in to proceed.`;

				if (["full_name"].includes(fieldLabel)) {
					return (
						<Grid item xs={12} md={6} key={id}>
							<TextField
								fullWidth
								type="text"
								id={id}
								label={label}
								{...register()}
								value={capitalizeFirstLetter(formData[fieldLabel])}
								onChange={(e) => handleInputChange(fieldLabel, e.target.value)}
								error={Boolean(formErrors[fieldLabel] || error)}
								helperText={
									formErrors[fieldLabel] ||
									(error?.type === "required" && error_message) ||
									description
								}
							/>
						</Grid>
					);
				}

				if (["email_address"].includes(fieldLabel)) {
					return (
						<Grid item xs={12} md={6} key={id}>
							<TextField
								fullWidth
								type="email"
								id={id}
								label={label}
								{...register()}
								value={formData[fieldLabel]}
								onChange={(e) => handleInputChange(fieldLabel, e.target.value)}
								error={Boolean(formErrors[fieldLabel] || error)}
								helperText={
									formErrors[fieldLabel] ||
									(error?.type === "required" && error_message) ||
									description
								}
							/>
						</Grid>
					);
				}

				if (["phone_number"].includes(fieldLabel)) {
					return (
						<Grid item xs={12} md={4} key={id}>
							<MuiTelInput
								fullWidth
								forceCallingCode
								focusOnSelectCountry
								defaultCountry={"CM"}
								variant="outlined"
								id={id}
								{...register()}
								value={formData[fieldLabel]}
								onChange={(value, info) => {
									info.countryCode = info.countryCode
										? info.countryCode
										: formData.phone_number_info.countryCode;

									setFormErrors({ ...formErrors, [fieldLabel]: "" });
									setFormData({
										...formData,
										[fieldLabel]: value,
										phone_number_info: info,
									});
									reset();
								}}
								label={label}
								error={Boolean(formErrors[fieldLabel] || error)}
								helperText={
									formErrors[fieldLabel] ||
									(error?.type === "required" && error_message) ||
									description
								}
							/>
						</Grid>
					);
				}

				if (["age"].includes(fieldLabel)) {
					return (
						<Grid item xs={12} md={4} key={id}>
							<TextField
								fullWidth
								type="number"
								id={id}
								label={label}
								{...register()}
								value={formData[fieldLabel]}
								onChange={(e) => handleInputChange(fieldLabel, e.target.value)}
								error={Boolean(formErrors[fieldLabel] || error)}
								helperText={
									formErrors[fieldLabel] ||
									(error?.type === "required" && error_message) ||
									description
								}
							/>
						</Grid>
					);
				}

				if (["gender"].includes(fieldLabel)) {
					return (
						<Grid item xs={12} md={4} key={id}>
							<FormControl fullWidth>
								<InputLabel id={`${label}-label`}>{label}</InputLabel>
								<Select
									fullWidth
									labelId={`${label}-label`}
									id={id}
									label={label}
									{...register()}
									value={formData[fieldLabel]}
									onChange={(e) => {
										setFormErrors({ ...formErrors, [fieldLabel]: "" });

										if (e.target.value.toLowerCase() !== "other") {
											setFormData({
												...formData,
												[fieldLabel]: e.target.value,
												other_gender: "",
											});
										} else {
											setFormData({
												...formData,
												[fieldLabel]: e.target.value,
											});
										}

										reset();
									}}
									error={Boolean(formErrors[fieldLabel] || error)}
								>
									{options.map((item) => {
										return (
											<MenuItem key={item.id} value={item.label}>
												{item.label}
											</MenuItem>
										);
									})}
								</Select>
								<FormHelperText
									error={Boolean(formErrors[fieldLabel] || error)}
								>
									{formErrors[fieldLabel] ||
										(error?.type === "required" && error_message) ||
										description}
								</FormHelperText>
							</FormControl>
						</Grid>
					);
				}

				if (
					["other_gender"].includes(fieldLabel) &&
					formData["gender"].toLowerCase() === "other"
				) {
					return (
						<Grid item xs={12} key={id}>
							<TextField
								fullWidth
								type="text"
								id={id}
								label="Please Specify"
								{...register()}
								value={formData[fieldLabel]}
								onChange={(e) => handleInputChange(fieldLabel, e.target.value)}
								error={Boolean(formErrors[fieldLabel] || error)}
								helperText={
									formErrors[fieldLabel] ||
									(error?.type === "required" && error_message) ||
									description
								}
							/>
						</Grid>
					);
				}

				if (["career_path"].includes(fieldLabel)) {
					return (
						<Grid item xs={12} md={6} key={id}>
							<FormControl fullWidth>
								<InputLabel id={`${label}-label`}>{label}</InputLabel>
								<Select
									fullWidth
									labelId={`${label}-label`}
									id={id}
									label={label}
									{...register()}
									value={formData[fieldLabel]}
									onChange={(e) =>
										handleInputChange(fieldLabel, e.target.value)
									}
									error={Boolean(formErrors[fieldLabel] || error)}
								>
									{options.map((item) => {
										return (
											<MenuItem key={item.id} value={item.label}>
												{item.label}
											</MenuItem>
										);
									})}
								</Select>
								<FormHelperText
									error={Boolean(formErrors[fieldLabel] || error)}
								>
									{formErrors[fieldLabel] ||
										(error?.type === "required" && error_message) ||
										description}
								</FormHelperText>
							</FormControl>
						</Grid>
					);
				}

				if (["how_did_you_hear_about_us?"].includes(fieldLabel)) {
					return (
						<Grid item xs={12} md={6} key={id}>
							<FormControl fullWidth>
								<InputLabel id={`${label}-label`}>{label}</InputLabel>
								<Select
									fullWidth
									labelId={`${label}-label`}
									id={id}
									label={label}
									{...register()}
									value={formData[fieldLabel]}
									onChange={(e) => {
										setFormErrors({ ...formErrors, [fieldLabel]: "" });

										if (e.target.value.toLowerCase() !== "other") {
											setFormData({
												...formData,
												[fieldLabel]: e.target.value,
												"other_how_did_you_hear_about_us?": "",
											});
										} else {
											setFormData({
												...formData,
												[fieldLabel]: e.target.value,
											});
										}

										reset();
									}}
									error={Boolean(formErrors[fieldLabel] || error)}
								>
									{options.map((item) => {
										return (
											<MenuItem key={item.id} value={item.label}>
												{item.label}
											</MenuItem>
										);
									})}
								</Select>
								<FormHelperText
									error={Boolean(formErrors[fieldLabel] || error)}
								>
									{formErrors[fieldLabel] ||
										(error?.type === "required" && error_message) ||
										description}
								</FormHelperText>
							</FormControl>
						</Grid>
					);
				}

				if (
					["other_how_did_you_hear_about_us?"].includes(fieldLabel) &&
					formData["how_did_you_hear_about_us?"].toLowerCase() === "other"
				) {
					return (
						<Grid item xs={12} key={id}>
							<TextField
								fullWidth
								type="text"
								id={id}
								label="Please Specify"
								{...register()}
								value={formData[fieldLabel]}
								onChange={(e) => handleInputChange(fieldLabel, e.target.value)}
								error={Boolean(formErrors[fieldLabel] || error)}
								helperText={
									formErrors[fieldLabel] ||
									(error?.type === "required" && error_message) ||
									description
								}
							/>
						</Grid>
					);
				}

				if (
					["why_should_we_accept_you_into_the_program?"].includes(fieldLabel)
				) {
					return (
						<Grid item xs={12} key={id}>
							<TextField
								fullWidth
								multiline
								rows={4}
								type="text"
								id={id}
								label={label}
								{...register()}
								value={formData[fieldLabel]}
								onChange={(e) => handleInputChange(fieldLabel, e.target.value)}
								error={Boolean(formErrors[fieldLabel] || error)}
								helperText={
									formErrors[fieldLabel] ||
									(error?.type === "required" && error_message) ||
									description
								}
							/>
						</Grid>
					);
				}

				return null;
			})}
		</Grid>
	);
};

const Enroll = () => {
	const methods = useGoogleForm({ form });
	const { handleSubmit, formState, reset } = methods;
	const [showCustomPage, setShowCustomPage] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		"full_name": "",
		"email_address": "",
		"phone_number": "",
		"phone_number_info": {},
		"age": "",
		"gender": "",
		"other_gender": "",
		"career_path": "",
		"how_did_you_hear_about_us?": "",
		"other_how_did_you_hear_about_us?": "",
		"why_should_we_accept_you_into_the_program?": "",
	});

	const [formErrors, setFormErrors] = useState({});

	const onSubmit = async (data) => {
		const errors = {};

		if (
			formData["why_should_we_accept_you_into_the_program?"].length < 200 ||
			formData["why_should_we_accept_you_into_the_program?"].length > 900
		) {
			errors["why_should_we_accept_you_into_the_program?"] =
				"Please enter a response between 200 and 900 characters.";
		}

		if (!formData.phone_number || !formData.phone_number_info.nationalNumber) {
			errors.phone_number = "Please enter your phone number.";
		} else if (!matchIsValidTel(formData.phone_number)) {
			if (!formData.phone_number_info.countryCode) {
				errors.phone_number =
					"Please select a country and enter your phone number.";
			} else {
				const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
				const countryName = regionNames.of(
					formData.phone_number_info.countryCode
				);
				errors.phone_number = `Please enter a valid phone number for ${countryName}.`;
			}
		}

		// Convert formData labels to IDs and exclude any fields if needed
		const Data = convertFormDataToIds(formData, ["phone_number_info"]);

		const DataKeys = Object.keys(Data);
		const dataKeys = Object.keys(data);

		if (JSON.stringify(DataKeys) !== JSON.stringify(dataKeys)) {
			console.warn(
				"Form data keys don't exactly match. If this causes any issues, please review the form configurations."
			);
		}

		setFormErrors(errors);

		if (Object.keys(errors).length === 0) {
			setIsSubmitting(true);
			await methods.submitToGoogleForms(Data);
			setShowCustomPage(true);
			reset({ data: {} });
			setIsSubmitting(false);
		}
	};

	return (
		<GoogleFormProvider {...methods}>
			<FormControl
				component="form"
				method="POST"
				onSubmit={handleSubmit(onSubmit)}
				sx={{ px: { md: 25, xs: 2 }, py: { md: 10, xs: 5 }, mb: 10 }}
			>
				<Typography variant="h3" gutterBottom>
					{form.title}
				</Typography>
				<Typography variant="body1" gutterBottom mb={5}>
					{form.description}
				</Typography>

				{showCustomPage ? (
					<EnrollFormAlert />
				) : (
					<Fragment>
						<FormInputs
							formData={formData}
							setFormData={setFormData}
							formErrors={formErrors}
							setFormErrors={setFormErrors}
							reset={reset}
						/>
						{isSubmitting ? (
							<Loader />
						) : (
							<Button
								fullWidth
								size="medium"
								sx={{ mt: 3 }}
								variant="contained"
								type="submit"
							>
								Apply
							</Button>
						)}
					</Fragment>
				)}
			</FormControl>
		</GoogleFormProvider>
	);
};

export default Enroll;
