import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";




const Section = ({
    children,
    page_color='white',
    maxMargin='my-5', minMargin='my-3',
    maxPadding='p-5', minPadding='p-0',
    width='90%',
  }) => {

  const isMobile = useMediaQuery({ maxWidth: 551 });
  const isTablet = useMediaQuery({ minWidth: 551, maxWidth: 801 });
  const isDesktop = useMediaQuery({ minWidth: 802 });

  const [sectionWidth, setSectionWidth] = useState(width);
  const [sectionMargin, setSectionMargin] = useState(maxMargin);
  const [sectionPadding, setSectionPadding] = useState(minPadding);
  const [buttonSize, setButtonSize] = useState('');

  useEffect(() => {
    if (isMobile) {
      setSectionWidth('100%')
      setSectionMargin(minMargin);
      setButtonSize('btn-sm');
    }
    
    if (isTablet) {
      setSectionWidth('95%');
      setSectionMargin(maxMargin);
      setButtonSize('');
    }
    
    if (isDesktop) {
      setSectionWidth('90%');
      setSectionMargin(maxMargin);
      setButtonSize('');
    }
  }, [isMobile, isTablet, isDesktop]);

  return (

    <>
    
      <div className={`${sectionMargin} ${sectionPadding} d-flex justify-content-center align-items-center bg-${page_color}`}>
        <div className="d-flex justify-content-center align-items-center" style={{ width: `${sectionWidth}` }}>
          {React.Children.map(children, (child) => {
            // Ensure the child is a valid React element before cloning
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { buttonSize });
            }
            return child;
          })}
        </div>
      </div>

    </>

  );

}

export default Section;