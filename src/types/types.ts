import { MouseEventHandler } from "react";


export interface CustomButtonProps {
   title?: string,
   ContainerStyles?: string,
   Handelclick?: MouseEventHandler<HTMLButtonElement>;
   variant?: 'ButtonOne' | 'ButtonTwo';
}