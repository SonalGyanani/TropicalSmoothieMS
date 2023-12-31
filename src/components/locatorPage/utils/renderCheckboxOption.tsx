import * as React from "react";
import constant from "../../../constant";

interface CheckboxOption {
  id: string,
  label: string
}

export interface CheckboxOptionCssClasses {
  option?: string,
  optionLabel?: string,
  optionInput?: string
}

interface CheckBoxOptionProps {
  option: CheckboxOption,
  onClick: (isChecked: boolean) => void,
  selected?: boolean,
  customCssClasses?: CheckboxOptionCssClasses
}

const builtInCssClasses: CheckboxOptionCssClasses = {
  option: 'listItem',
  optionInput: 'w-3.5 h-3.5 form-checkbox cursor-pointer border border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500',
  optionLabel: ' '
}

export default function renderCheckboxOption({
  option, selected, onClick, customCssClasses
}: CheckBoxOptionProps) {
  const cssClasses = { ...builtInCssClasses, ...customCssClasses };
  const keyId = constant.slugify(option.id);  
  return (
    <div className={cssClasses.option} key={keyId}>
      <input 
        type="checkbox"
        id={keyId}
        checked={selected}
        className={cssClasses.optionInput}
        onChange={evt => onClick(evt.target.checked)}
      />
      <label className={cssClasses.optionLabel} htmlFor={keyId}>{option.label}</label>
    </div>
  );
}
