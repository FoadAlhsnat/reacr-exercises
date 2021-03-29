import React from 'react'
import Text from './Text'

export default function main() {
  const text='Tomorrows schedule:9:00-9:30 Ramat Cosit (we will send a link tomorrow morning)9:30-11:30 Avi will do a crud app with mock api with all you have learned the past few weeks.11:30-12:00 break. already a project in mind for the mid project you can ping me and ll give you advice on it.'
  const number=5
  return (
    <div>
      <Text number={number} text={text}/>
    </div>
  )
}
