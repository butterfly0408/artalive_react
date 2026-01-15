const Section = ({
  children,
  page_color='white',
  flex_direction='row',
  gap='5',
  margin='my-5'
}) => {

  return (

    <>
    
      <div className={`${margin} p-3 d-flex justify-content-center bg-${page_color}`}>
        <div className={`d-flex flex-${flex_direction} gap-${gap} justify-content-center`} style={{ width: '90%' }}>
          <div className="container">{children}</div>
        </div>
      </div>

    </>

  );

}

export default Section;