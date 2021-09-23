import React { useState } from 'react';
import InsertControls from '../components/inventory/InventoryAddItemControls';

const AddItemToInventory = () => {
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [itemPrice, setItemPrice]= useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const[totalPrice, setTotalPrice] = useState(0);


    const handleItemName = ({ target }) => {
        setItemName(target.value);
    };

    const handleCategory = ({ target }) => {
        setCategory(target.value);
    };

    const handleItemPrice = ({ target }) => {
        setItemPrice(target.value);
    };

    const handleTotalItems = ({ target }) => {
        setTotalItems(target.value);
    };

    const handleTotalPrice = ({ target }) => {
        setTotalPrice(target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        


    }


}

