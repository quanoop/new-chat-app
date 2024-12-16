import React from 'react'

import { useAppStore } from '@/store';

const ContactList = ({ contacts, isChannel = false }) => {
    const { selectedChatData, setSelectecChatType, setSelectedChatData, selectedChatType } = useAppStore();

    const handleClick = (contact) => {

    }
    return (
        <div>ContactList</div>
    )
}

export default ContactList