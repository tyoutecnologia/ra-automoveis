import { Button } from '@chakra-ui/react'
import React from 'react'

type CustomButtonProps = {
    isNotValid: boolean,
    handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    title: string,
    wBase?: string
}

export default function CustomButton({isNotValid, handleClick, wBase='100%', title} : CustomButtonProps) {
  return (
    <Button
    disabled={isNotValid}
    w={{ base: wBase, xl: "25%" }}
    py={{ base: "", md: "25px", xl: "0px" }}
    fontStyle={"italic"}
    color={"light"}
    bg={isNotValid ? "gray" : "primary"}
    cursor={isNotValid ?"not-allowed" : "pointer"}
    borderRadius={"20px"}
    onClick={handleClick}
    _hover={{bg: isNotValid ? '' : 'secondary'}}
    transition={"all 0.2s ease-in-out"}
    
  >
    {title}
  </Button>
  )
}
