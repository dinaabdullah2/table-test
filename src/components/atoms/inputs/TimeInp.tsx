 import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import { useRef } from 'react';
type time={
    label:string
 }
 function TimeInp({label}:time) {
     const ref = useRef<HTMLInputElement>(null);

     const pickerControl = (
         <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
             <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
         </ActionIcon>
     );

     return (
         <TimeInput label={label} ref={ref} rightSection={pickerControl} />
     );
 }
 export default TimeInp;