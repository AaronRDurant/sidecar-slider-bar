"use client";

import { useState } from "react";

export default function EmploymentForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await fetch("https://submit-form.com/your-form-id", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md p-6 md:p-8 max-w-4xl mx-auto space-y-6"
    >
      {submitted && (
        <p className="text-green-600 font-medium mb-4">
          Application submitted! We&apos;ll be in touch.
        </p>
      )}

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700">
            First Name*
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="mt-1 w-full border rounded-md px-3 py-2"
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
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-700">
            Street Address
          </label>
          <input
            type="text"
            name="address"
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            name="state"
            placeholder="State / Zip"
            className="w-full border rounded-md px-3 py-2"
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
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Phone Number*
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 w-full border rounded-md px-3 py-2"
            placeholder="123-456-7890"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-700">
            Position(s) Applying For*
          </label>
          <input
            type="text"
            name="position"
            required
            placeholder="Server, bartender, etc."
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

      {/* Location checkboxes */}
      <fieldset>
        <legend className="text-sm font-medium text-neutral-700 mb-2">
          Locations Applying To* (Select at least one)
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
              <input type="checkbox" name="locations" value={loc} required />
              {loc}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Shifts */}
      <fieldset>
        <legend className="text-sm font-medium text-neutral-700 mb-2">
          Shifts Available to Work*
        </legend>
        <div className="flex flex-wrap gap-4">
          {["Days", "Nights", "Weekdays", "Weekends"].map((shift) => (
            <label key={shift} className="flex items-center gap-2">
              <input type="checkbox" name="shifts" value={shift} required />
              {shift}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Yes/No Questions */}
      {[
        ["previousEmployment", "Have you been employed by us before?"],
        ["currentEmployment", "Are you currently employed?"],
        ["contactEmployer", "May we contact your present employer?"],
        ["age18", "Are you 18 years of age or older?"],
      ].map(([name, label]) => (
        <fieldset key={name} className="space-y-2">
          <legend className="text-sm font-medium text-neutral-700">
            {label}
          </legend>
          <div className="flex gap-4">
            <label>
              <input type="radio" name={name} value="Yes" required /> Yes
            </label>
            <label>
              <input type="radio" name={name} value="No" /> No
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
          className="mt-1 w-full border rounded-md px-3 py-2"
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

      {/* Work type checkboxes */}
      <fieldset>
        <legend className="text-sm font-medium text-neutral-700 mb-2">
          You are available to work:
        </legend>
        <div className="flex gap-4">
          {["Full-Time", "Part-Time", "Temporary"].map((type) => (
            <label key={type}>
              <input type="checkbox" name="availabilityType" value={type} />{" "}
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Start Date */}
      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Date You Can Begin Work
        </label>
        <input
          type="date"
          name="startDate"
          className="mt-1 w-full border rounded-md px-3 py-2"
        />
      </div>

      {/* Education */}
      <div className="space-y-2">
        <h2 className="text-base font-semibold">Education</h2>
        <input
          type="text"
          name="schoolName"
          placeholder="School Name"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="schoolLocation"
          placeholder="City, State"
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      {/* Work History (3 employers) */}
      {["Current / Most Recent", "First Previous", "Second Previous"].map(
        (label, i) => (
          <div key={i} className="space-y-2">
            <h2 className="text-base font-semibold">{label} Employer</h2>
            <input
              type="text"
              name={`employer${i}Name`}
              placeholder="Employer Name"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name={`employer${i}Address`}
              placeholder="Address, City, State, Zip"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name={`employer${i}Supervisor`}
              placeholder="Supervisor's Name, Title & Phone Number"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name={`employer${i}Dates`}
              placeholder="Employment Dates"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name={`employer${i}Reason`}
              placeholder="Specific Reason for Leaving"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name={`employer${i}SalaryStart`}
              placeholder="Weekly Starting Salary or Hourly Rate"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name={`employer${i}SalaryEnd`}
              placeholder="Weekly Ending Salary or Hourly Rate"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name={`employer${i}Title`}
              placeholder="Job Title*"
              required
              className="w-full border rounded-md px-3 py-2"
            />
            <textarea
              name={`employer${i}Duties`}
              required
              placeholder="Describe Duties*"
              rows={3}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        )
      )}

      {/* Permission to Contact */}
      <div>
        <label
          htmlFor="contactPermission"
          className="block text-sm font-medium text-neutral-700"
        >
          I give permission to contact my former employers*:
        </label>
        <select
          id="contactPermission"
          name="contactPermission"
          required
          className="mt-1 w-full border rounded-md px-3 py-2"
        >
          <option value="">Select one</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p className="text-xs text-neutral-500 mt-1">
          I hereby give Sidecar Slider Bar permission to contact my former
          employers and be provided with complete information regarding my
          former employment including all information included in my personnel
          file and/or reasons for the end of my employment.
        </p>
      </div>

      {/* Personal References */}
      {[1, 2, 3].map((n) => (
        <div key={n} className="space-y-2">
          <h2 className="text-base font-semibold">Reference #{n}</h2>
          <input
            type="text"
            name={`reference${n}Name`}
            placeholder="Name"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            name={`reference${n}Company`}
            placeholder="Company"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            name={`reference${n}Phone`}
            placeholder="Phone Number"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            name={`reference${n}Relationship`}
            placeholder="Relationship"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            name={`reference${n}Address`}
            placeholder="Address, City, State, Zip"
            className="w-full border rounded-md px-3 py-2"
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

      <button
        type="submit"
        className="block w-full md:w-auto bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
      >
        Submit Application
      </button>
    </form>
  );
}
