import React, { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { queryContext } from "../App";

export const MealItem = () => {
    const {query, setQuery} = useContext(queryContext)
    const [formData, setFormData] = useState({
        quantity: '',
        unit: 'lb',
        foodName: ''
    });

    console.log(query)

    const handleSave = () => {
        const mealItemString = `${formData.quantity} ${formData.unit} ${formData.foodName}`;
        setQuery(mealItemString);
    };

    return (
        <Row>
        <Col>
            <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={formData.quantity}
            onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
            }
            />
        </Col>
        <Col>
            <Form.Select
            aria-label="Unit"
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            >
            <option>lb</option>
            <option>oz</option>
            <option>g</option>
            </Form.Select>
        </Col>
        <Col>
            <Form.Control
            type="text"
            placeholder="Enter food name"
            value={formData.foodName}
            onChange={(e) =>
                setFormData({ ...formData, foodName: e.target.value })
            }
            />
        </Col>
        <Col>
            <button onClick={handleSave}>Save</button>
        </Col>
        </Row>
    );
    };