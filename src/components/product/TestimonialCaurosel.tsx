import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import userImage from '../../images/customer.png';
import girlImage from '../../images/imgs/products/girl-avatar.png';

const data = [
  {
    id: 0,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: girlImage,
  },
  {
    id: 1,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: userImage,
  },
  {
    id: 2,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: girlImage,
  },
  {
    id: 3,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: userImage,
  },
  {
    id: 4,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: girlImage,
  },
  {
    id: 5,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: userImage,
  },
  {
    id: 6,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: girlImage,
  },
  {
    id: 7,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: userImage,
  },
  {
    id: 8,
    comment:
      'Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.',
    user: 'Wilkins Micawber',
    image: girlImage,
  },
];

const TestimonialCaurosel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const trioArray = data.slice(
    Math.max(0, currentSlide - 1),
    Math.min(currentSlide + 2, data.length)
  );

  const singleItem = data[currentSlide];

  return (
    <>
      <div className="!mt-16 relative">
        <div ref={sliderRef} className="keen-slider">
          {data.map((item: any, _idx: number) => (
            <div key={_idx} className="keen-slider__slide">
              <div className="mx-auto bg-white p-4 md:p-8 max-w-[250px] small:max-w-[350px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[885px] rounded-md mb-8 md:mb-12">
                <p className="text-[#171717] text-[12px] font-[400] md:text-[20px] md:font-[500] mb-2 text-center">
                  {item.comment}
                </p>
                <p className="text-[#171717] text-[8px] md:text-[20px] font-[800] md:font-[700] text-center">
                  {item.user}
                </p>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <>
          <div className="hidden sm:flex gap-x-4 justify-center">
            {trioArray.map((item: any) => {
              return (
                <img
                  src={item.image}
                  alt="Customer Image"
                  className={`rounded-full w-[50px] h-[50px] border-2 md:border-4 border-white ${
                    currentSlide === item.id
                      ? 'mt-4 md:h-[100px] md:w-[100px]'
                      : 'md:h-[60px] md:w-[60px]'
                  }`}
                />
              );
            })}
          </div>

          <div className="sm:hidden flex justify-center">
            <img
              src={singleItem.image}
              alt="Customer Image"
              className={`rounded-full w-[50px] h-[50px] border-2 md:border-4 border-white`}
            />
          </div>
        </>
      )}
    </>
  );
};

export default TestimonialCaurosel;

function Arrow(props: any) {
  const disabled = props.disabled ? '!fill-[#ffffff80]' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`w-[30px] h-[30px] absolute top-[35%] fill-[#A51E1E] cursor-pointer ${
        props.left
          ? 'left-[2px] md:left-[50px] xl:left-[80px]'
          : 'left-auto right-[2px] md:right-[50px] xl:right-[80px]'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
