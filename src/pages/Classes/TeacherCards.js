import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import teachers from '../../data/Teachers.json';
import TeacherCard from '../../components/TeacherCard';


const TeacherCards = ({page_color, buttonSize}) => {

  const isSmallTablet = useMediaQuery({ maxWidth: 651 });
  const isTablet = useMediaQuery({ minWidth: 652 });
  
  const [flexWrap, setFlexWrap] = useState('flex-wrap');
  const [flexDirection, setFlexDirection] = useState('');


  useEffect(() => {
    if (isSmallTablet) {
      setFlexWrap('');
      setFlexDirection('flex-column')
    }

    if (isSmallTablet) {
      setFlexWrap('flex-wrap');
      setFlexDirection('')
    }

  }, [isSmallTablet, isTablet]);



  
  return (

    <>

      <div className={`d-flex ${flexWrap} ${flexDirection} gap-4 justify-content-center`}>
        {teachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            id={teacher.id}
            name={teacher.name}
            profileImage={teacher.profileImage}
            quote={teacher.quote}
            quoteAuthor={teacher.quoteAuthor}
            started={teacher.started}
            color={page_color}
            buttonSize={buttonSize}
          />
        ))}
      </div>
    
    </>

  );

}


export default TeacherCards;