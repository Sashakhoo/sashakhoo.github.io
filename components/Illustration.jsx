function Illustration(props) {
  return (
    <svg
      width={486}
      height={534}
      viewBox="0 0 486 534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >

      {/* Circle for the profile picture */}
      <circle cx={243} cy={267} r={60}>
        {/* Clip path for the profile picture */}
        <clipPath id="circleClip">
          <circle cx={243} cy={267} r={60} />
        </clipPath>2

        {/* Image for the profile picture */}
        <image
          xlinkHref="../public/IMG_1139.jpg"  
          x={183}  
          y={207}  
          width={120}
          height={120}
          clipPath="url(#circleClip)"
        />
      </circle>

      {/* The path element is removed in this version */}
    </svg>
  );
}

export default Illustration;
