import { SvgIcon, SvgIconProps } from "@mui/material";

const SelectDropdownIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 16 9" {...props}>
      <svg fill="none">
        <path
          d="M14.5984 1.45801L9.1651 6.89134C8.52344 7.53301 7.47344 7.53301 6.83177 6.89134L1.39844 1.45801"
          stroke={props.color ? "currentColor" : "#6E798D"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default SelectDropdownIcon;
