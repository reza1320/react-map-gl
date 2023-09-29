import React from 'react'
import { Label, Select } from 'flowbite-react'







export default function SelectOption({ detectedProvence }) {
    return (
        <div className="max-w-md relative" id="select" style={{ zIndex: '1' }}>
            <div className="mb-2 block">
                <Label htmlFor="countries" value="سال" />
            </div>
            <Select id="countries" defaultValue={`${Object.assign(detectedProvence)[0]?.year}`} required>
                <option>
                    1398
                </option>
                <option>
                    1399
                </option>
                <option>
                    1400
                </option>
                <option>
                    1401
                </option>
                <option>
                    1402
                </option>
            </Select>
        </div>
    )
}