import { Input, Textarea } from '@chakra-ui/react'
import React from 'react'

type RAInputProps = {
    title: string,
    value: string,
    type?: string,
}

export default function RAInput({title, value, type = "normal"} : RAInputProps) {
  return type === "textarea" ? 

  (
    <Textarea border={'2px solid'} borderColor={'primary'}  bg={'light'} placeholder={title} value={value} />
  )
  :
  (
   <>
    <Input border={'2px solid'} borderColor={'primary'}  bg={'light'} placeholder={title} value={value} />
   </>
  )

}
