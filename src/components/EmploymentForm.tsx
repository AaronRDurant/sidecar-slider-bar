"use client";

import { useState } from "react";

import PhoneInput from "./PhoneInput";

export default function EmploymentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    global?: string;
    locations?: string;
    shifts?: string;
    availability?: string;
  }>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: reject if filled
    const honey = (
      form.querySelector('input[name="extraField"]') as HTMLInputElement
    ).value;
    if (honey) return;

    // Validate checkbox groups
    const newErrors: {
      locations?: string;
      shifts?: string;
      availability?: string;
    } = {};
    const locationsChecked =
      form.querySelectorAll('input[name="locations"]:checked').length > 0;
    const shiftsChecked =
      form.querySelectorAll('input[name="shifts"]:checked').length > 0;
    const availabilityChecked =
      form.querySelectorAll('input[name="availabilityType"]:checked').length >
      0;

    if (!locationsChecked)
      newErrors.locations = "Please select at least one location.";
    if (!shiftsChecked) newErrors.shifts = "Please select at least one shift.";
    if (!availabilityChecked)
      newErrors.availability = "Please select at least one availability type.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Build labeled FormData with grouped checkbox values
    const labeledData = new FormData();
    const elements = Array.from(form.elements) as HTMLInputElement[];

    // To group checkbox values by name
    const checkboxGroups: Record<string, { label: string; values: string[] }> =
      {};

    elements.forEach((el) => {
      if (!el.name || el.name === "extraField") return;

      if (el.type === "checkbox") {
        if (el.checked) {
          if (!checkboxGroups[el.name]) {
            checkboxGroups[el.name] = {
              label: el.dataset.label || el.name,
              values: [],
            };
          }
          checkboxGroups[el.name].values.push(el.value);
        }
        return;
      }

      if (el.type === "radio") {
        if (el.checked) {
          labeledData.append(el.dataset.label || el.name, el.value);
        }
        return;
      }

      if (el.value) {
        labeledData.append(el.dataset.label || el.name, el.value);
      }
    });

    // Append grouped checkboxes as a single line
    Object.values(checkboxGroups).forEach((group) => {
      labeledData.append(group.label, group.values.join(", "));
    });

    try {
      const res = await fetch("https://formspree.io/f/xblkkrpv", {
        method: "POST",
        body: labeledData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      form.reset();
      setSubmitted(true);
      document
        .querySelector("#success")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error("Form submission failed:", err);
      setErrors({
        global: "There was a problem submitting the form. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md p-6 md:p-8 max-w-4xl mx-auto space-y-6"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="extraField"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700">
            First Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            data-label="First Name"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Last Name*
          </label>
          <input
            type="text"
            name="lastName"
            required
            data-label="Last Name"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Email Address*
          </label>
          <input
            type="email"
            name="email"
            required
            data-label="Email Address"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Phone Number*
          </label>
          <PhoneInput name="phone" required dataLabel="Phone Number" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-700">
            Position(s) Applying For*
          </label>
          <input
            type="text"
            name="position"
            required
            data-label="Position(s) Applying For"
            placeholder="Server, bartender, etc."
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Location checkboxes */}
      <fieldset>
        <legend className="text-sm font-medium text-neutral-700 mb-2">
          Locations Applying To* (Select one or more)
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Birmingham",
            "Brighton",
            "Farmington",
            "Ferndale",
            "Grosse Pointe",
            "Lansing",
            "Plymouth",
            "Sterling Heights",
          ].map((loc) => (
            <label key={loc} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="locations"
                value={loc}
                data-label="Location(s) Applying To"
              />
              {loc}
            </label>
          ))}
        </div>
        {errors.locations && (
          <p className="text-red-600 text-sm mt-1">{errors.locations}</p>
        )}
      </fieldset>

      {/* Work type checkboxes */}
      <fieldset>
        <legend className="text-sm font-medium text-neutral-700 mb-2">
          You are available to work: (Select one or more)
        </legend>
        <div className="flex gap-4">
          {["Full-Time", "Part-Time", "Temporary"].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                name="availabilityType"
                value={type}
                data-label="Availability Type"
              />{" "}
              {type}
            </label>
          ))}
        </div>
        {errors.availability && (
          <p className="text-red-600 text-sm mt-1">{errors.availability}</p>
        )}
      </fieldset>

      {/* Shifts */}
      <fieldset>
        <legend className="text-sm font-medium text-neutral-700 mb-2">
          Shifts Available to Work* (Select one or more)
        </legend>
        <div className="flex flex-wrap gap-4">
          {["Days", "Nights", "Weekdays", "Weekends"].map((shift) => (
            <label key={shift} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="shifts"
                value={shift}
                data-label="Shifts Available"
              />
              {shift}
            </label>
          ))}
        </div>
        {errors.shifts && (
          <p className="text-red-600 text-sm mt-1">{errors.shifts}</p>
        )}
      </fieldset>

      {/* Yes/No Questions */}
      {[
        ["previousEmployment", "Have you been employed by us before?"],
        ["currentEmployment", "Are you currently employed?"],
        ["age18", "Are you 18 years of age or older?"],
      ].map(([name, label]) => (
        <fieldset key={name} className="space-y-2">
          <legend className="text-sm font-medium text-neutral-700">
            {label}
          </legend>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name={name}
                value="Yes"
                data-label={`${label}`}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name={name}
                value="No"
                data-label={`${label}`}
              />{" "}
              No
            </label>
          </div>
        </fieldset>
      ))}

      {/* Citizenship Dropdown */}
      <div>
        <label
          htmlFor="citizenship"
          className="block text-sm font-medium text-neutral-700"
        >
          Are you a U.S. citizen or authorized by INS to work?*
        </label>
        <select
          id="citizenship"
          name="citizenship"
          required
          data-label="Citizenship / INS Authorization"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select one</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p className="text-xs text-neutral-500 mt-1">
          (Proof of citizenship or immigration status is required upon
          employment.)
        </p>
      </div>

      {/* Start Date */}
      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Date You Can Begin Work
        </label>
        <input
          type="date"
          name="startDate"
          data-label="Start Date"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Education */}
      <div className="space-y-2">
        <h2 className="text-base font-semibold">Education</h2>
        <input
          type="text"
          name="schoolName"
          data-label="Education: School Name"
          placeholder="School Name"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          name="schoolLocation"
          data-label="Education: City, State"
          placeholder="City, State"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Work History (Current/Most Recent Employer) */}
      <div className="space-y-2">
        <h2 className="text-base font-semibold">
          Current or Most Recent Employer
        </h2>
        <input
          type="text"
          name="employerName"
          data-label="Employer: Name"
          placeholder="Employer Name"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          name="employerJobTitle"
          data-label="Employer: Job Title"
          placeholder="Job Title"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          name="employerDates"
          data-label="Employer: Dates of Employment"
          placeholder="Dates of Employment (example: January 2023 – Present)"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          name="employerSupervisorName"
          data-label="Employer: Supervisor Name"
          placeholder="Supervisor Name"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <PhoneInput
          name="employerSupervisorPhone"
          dataLabel="Employer: Supervisor Phone"
          placeholder="Supervisor Phone Number"
        />
        <textarea
          name="employerDuties"
          data-label="Employer: Duties"
          placeholder="Describe Duties"
          rows={3}
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Permission to Contact */}
      <div>
        <label
          htmlFor="contactPermission"
          className="block text-sm font-medium text-neutral-700"
        >
          I give permission to contact my listed employer(s)*:
        </label>
        <select
          id="contactPermission"
          name="contactPermission"
          required
          data-label="Permission to Contact Employer(s)"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select one</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p className="text-xs text-neutral-500 mt-1">
          I hereby give Sidecar Slider Bar permission to contact my listed
          employer(s) and be provided with complete information regarding my
          former employment, including all information in my personnel file
          and/or reasons for the end of employment.
        </p>
      </div>

      {/* Personal References */}
      {[1, 2, 3].map((n) => (
        <div key={n} className="space-y-2">
          <h2 className="text-base font-semibold">Reference #{n}</h2>
          <input
            type="text"
            name={`reference${n}Name`}
            data-label={`Reference #${n}: Name`}
            placeholder="Name"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name={`reference${n}Company`}
            data-label={`Reference #${n}: Company`}
            placeholder="Company"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <PhoneInput
            name={`reference${n}Phone`}
            dataLabel={`Reference #${n}: Phone`}
            placeholder="Phone Number"
          />
          <input
            type="text"
            name={`reference${n}Relationship`}
            data-label={`Reference #${n}: Relationship`}
            placeholder="Relationship"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      ))}

      {/* Legal Agreement */}
      <div>
        <h2 className="text-base font-semibold">
          Applicant&apos;s Statement and Conditions of Employment
        </h2>
        <p className="text-sm text-neutral-700 mt-2 mb-4">
          (Please read carefully before signing.)
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          I certify that the answers given by me in this employment application
          are true, correct and complete. I agree that Sidecar Slider Bar shall
          not be liable, in any respect, if my employment is terminated because
          of misstatements or pertinent omissions made by me in this
          application. Further, I agree that if I seek damages for my
          termination and it is determined that, in any respect, that my
          employment was terminated and/or would have been terminated because of
          misstatements or pertinent omissions made by me in this application or
          failure to follow Sidecar Slider Bar rules or regulations, that I will
          be responsible for any and all actual attorney fees and costs incurred
          by Sidecar Slider Bar in defending itself.
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          I agree to the search or examination of myself or personal property
          while on Sidecar Slider Bar&apos;s premises. I also authorize any
          company, school, police or security personnel, or other person to give
          any information regarding my employment, habits, ability, or any other
          characteristics whatsoever, together with any information they have
          regarding me whether or not it is in their records, to Sidecar Slider
          Bar. I hereby release all companies, schools, or other persons from
          liability for any damages whatsoever for releasing this information.
          The use of results from this form and/or tests will be used for
          prudent employment decisions. It is agreed and understood that
          completion of this application does not mean a job opening exists and
          in no way obligates Sidecar Slider Bar to employ me.
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          In the event of employment, I will comply with all Sidecar Slider
          Bar&apos;s rules and regulations as established from time to time. I
          also understand that Sidecar Slider Bar retains the right to amend,
          modify, add or delete any or all policies or procedures at its sole
          and absolute discretion.
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          I hereby understand and acknowledge that any employment relationship
          with Sidecar Slider Bar is of an &quot;At-Will&quot; nature, which
          means that the Employee may resign at any time and the Employer may
          discharge Employee at any time, with or without notice, with or
          without cause. It is further understood that this &quot;At-Will&quot;
          employment relationship may not be changed by any written document or
          by verbal agreement unless such change is specifically acknowledged in
          writing by an authorized Executive of Sidecar Slider Bar.
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          During my employment with Sidecar Slider Bar and after my employment
          ends, I agree not to disclose any confidential or proprietary
          information regarding operating and trade secrets. I further agree
          that with respect to any civil litigation involving Sidecar Slider Bar
          in which I am a potential witness and which does not involve an actual
          or potential claim by me personally, I will not discuss the facts of
          the case with any third parties without first notifying Sidecar Slider
          Bar or unless an authorized Executive or attorney of Sidecar Slider
          Bar is present. I agree that any such discussions in violation of this
          agreement will cause irreparable harm to Sidecar Slider Bar. A copy of
          this form may be used as the original. I agree that any claim or
          lawsuit relating to my service with Sidecar Slider Bar or any of its
          subsidiaries must be filed no more than six (6) months after the date
          of the employment action that is the subject of the claim or lawsuit.
          I waive any statute of limitations to the contrary.
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          This application is valid for sixty days from the application date
          unless renewed in person or in writing.
        </p>
      </div>

      {/* Signature and Date */}
      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Type Your Name as Signature (Required)
        </label>
        <input
          type="text"
          name="signature"
          required
          data-label="Applicant Signature"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Today&apos;s Date (Required)
        </label>
        <input
          type="date"
          name="date"
          required
          data-label="Date Signed"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
      </div>

      <button
        type="submit"
        className="block w-full md:w-auto bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
      >
        Submit Application
      </button>

      {errors.global && (
        <p className="text-red-600 text-sm text-center">{errors.global}</p>
      )}

      {submitted && (
        <p
          id="success"
          className="text-green-600 font-medium mt-4 text-center"
          aria-live="polite"
        >
          Application submitted!
        </p>
      )}
    </form>
  );
}
