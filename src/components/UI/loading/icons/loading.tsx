import { SvgIcon, SvgIconProps } from "@mui/material";

const LoadingIcon: React.FC<SvgIconProps> = (props) => {
  const { sx, ...otherProps } = props;
  return (
    <SvgIcon viewBox="0 0 100 100" sx={{ ...sx }} {...otherProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "auto", background: "0 0" }}
        display="block"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="84"
          cy="50"
          r="10"
          fill={props.color ? "currentColor" : "#fff"}
        >
          <animate
            attributeName="r"
            begin="0s"
            calcMode="spline"
            dur="0.43859649122807015s"
            keySplines="0 0.5 0.5 1"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="11;0"
          ></animate>
          <animate
            attributeName="fill"
            begin="0s"
            calcMode="discrete"
            dur="1.7543859649122806s"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values={props.color ? "currentColor" : "#fff"}
          ></animate>
        </circle>
        <circle
          cx="16"
          cy="50"
          r="10"
          fill={props.color ? "currentColor" : "#fff"}
        >
          <animate
            attributeName="r"
            begin="0s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="0;0;11;11;11"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="16;16;16;50;84"
          ></animate>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="10"
          fill={props.color ? "currentColor" : "#fff"}
        >
          <animate
            attributeName="r"
            begin="-0.43859649122807015s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="0;0;11;11;11"
          ></animate>
          <animate
            attributeName="cx"
            begin="-0.43859649122807015s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="16;16;16;50;84"
          ></animate>
        </circle>
        <circle
          cx="84"
          cy="50"
          r="10"
          fill={props.color ? "currentColor" : "#fff"}
        >
          <animate
            attributeName="r"
            begin="-0.8771929824561403s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="0;0;11;11;11"
          ></animate>
          <animate
            attributeName="cx"
            begin="-0.8771929824561403s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="16;16;16;50;84"
          ></animate>
        </circle>
        <circle
          cx="16"
          cy="50"
          r="10"
          fill={props.color ? "currentColor" : "#fff"}
        >
          <animate
            attributeName="r"
            begin="-1.3157894736842104s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="0;0;11;11;11"
          ></animate>
          <animate
            attributeName="cx"
            begin="-1.3157894736842104s"
            calcMode="spline"
            dur="1.7543859649122806s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            values="16;16;16;50;84"
          ></animate>
        </circle>
      </svg>
    </SvgIcon>
  );
};

export default LoadingIcon;
