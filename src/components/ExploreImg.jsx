import { ImageList, ImageListItem } from '@mui/material'
import React from 'react';
import ExpImg10 from "../assets/ExplorePics/explorePic10.webp";
import ExpImg11 from "../assets/ExplorePics/explorePic11.webp";
import ExpImg12 from "../assets/ExplorePics/explorePic12.webp";
import ExpImg13 from "../assets/ExplorePics/explorePic13.webp";
import ExpImg14 from "../assets/ExplorePics/explorePic14.webp";



const itemData = [
   {image:ExpImg10} ,
   {image:ExpImg11} ,
   {image:ExpImg12} ,
   {image:ExpImg13} ,
   {image:ExpImg14} ,
   {image:ExpImg10 },
    {image:ExpImg13} ,
    {image:ExpImg10} ,
   {image:ExpImg11} ,
   {image:ExpImg12} ,
   {image:ExpImg13} ,
   {image:ExpImg14} ,
   {image:ExpImg10 },
    {image:ExpImg13} ,
    {image:ExpImg10} ,
   {image:ExpImg11} ,
   {image:ExpImg12} ,
   {image:ExpImg13} ,
   {image:ExpImg14} ,
   {image:ExpImg10 },
    {image:ExpImg13} ,
  
  ];
export default function ExploreImg() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '150px' }}>
      <ImageList style={{ width: '80%', maxWidth: '1000px' }} cols={3} rowHeight={250}>
        {itemData.map((item) => (
          <ImageListItem key={item.image}>
            <img
              src={item.image}
              alt="pic"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}