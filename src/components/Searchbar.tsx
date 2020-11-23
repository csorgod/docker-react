import React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';

import '../styles/components/searchbar.css';

const pets = [
    { key: "dog", text: "Cachorro", value: "dog" },
    { key: "cat", text: "Gato", value: "cat" }
];
  
const cities = [
    { key: "sao_paulo", text: "São Paulo", value: "sao_paulo" },
    { key: "rio_de_janeiro", text: "Rio de Janeiro", value: "rio_de_janeiro" }
];

export default function Searchbar() {
    const [city, setCity] = useState<string>("São Paulo");
    const [pet, setPet] = useState<string>("Cachorro");

    return (
        <div className="search-bar">
            <InputGroup>
                <FormControl className="input-field"
                    placeholder="Como será seu próximo pet?"
                    aria-label="pet's characteristics"
                    aria-describedby="basic-addon2"
                    />
                    <DropdownButton id="pet" as={InputGroup.Append} variant="light" title={pet}>
                        {pets.map(x => {
                            return (
                                <Dropdown.Item onSelect={(eventKey: any, e: Object) => setPet(eventKey)} eventKey={x.text} key={x.key}>
                                    {x.text}
                                </Dropdown.Item>
                            )
                        })}                        
                    </DropdownButton>
                    <DropdownButton id="city" as={InputGroup.Append} variant="light" title={city}>
                        {cities.map(x => {
                                return (
                                    <Dropdown.Item onSelect={(eventKey: any, e: Object) => setCity(eventKey)}  eventKey={x.text} key={x.key}>
                                        {x.text}
                                    </Dropdown.Item>
                                )
                            })}  
                    </DropdownButton>
                <InputGroup.Append>
                    <Button>PROCURAR</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}