import { Accordion } from 'flowbite-react';
// component
import Chart from './Chart'
import SelectOption from './SelectOption'









export default function Acordion({ detectedProvence }) {
    return (
        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title className='relative z-10'>
                    آمار ازدواج
                </Accordion.Title>
                <Accordion.Content className='overflow-scroll overflow-x-hidden h-max'>
                    <SelectOption detectedProvence={detectedProvence} />
                    <Chart detectedProvence={detectedProvence} />
                </Accordion.Content>
            </Accordion.Panel>


            <Accordion.Panel>
                <Accordion.Title className='relative z-10'>
                    آمار طلاق
                </Accordion.Title>
                <Accordion.Content className='overflow-scroll overflow-x-hidden h-max'>
                    <SelectOption detectedProvence={detectedProvence} />
                    <Chart detectedProvence={detectedProvence} />
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}