const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      name: "maikel_cardenas",
      contacts: [],
      contact:{}
    },
    actions: {
      getContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/maikel_cardenas"
          );
          console.log(response);
          if (response.status === 404) {
            return getActions().createAgenda();
          }
          const data = await response.json();
          setStore({ contacts: data.contacts });
          console.log(data);
        } catch (error) {
          console.log("Error fetching contacts:", error);
        }
      },

      createAgenda: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/maikel_cardenas",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "maikel_cardenas",
              }),
            }
          );
          const data = await response.json();
          setStore({ contacts: data.contacts || [] });
          console.log(data);
        } catch (error) {
          console.log("Error creating agenda:", error);
        }
      },

      createContact: async (contact) => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/maikel_cardenas/contacts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contact),
            }
          );

          if (response.ok) {
            getActions().getContacts(); // Refresh the contacts list after creating a new contact
          }
        } catch (error) {
          console.log("Error creating contact:", error);
        }
      },

      deleteContact: async (id) => {
        try {
          await fetch(
            `https://playground.4geeks.com/contact/agendas/maikel_cardenas/contacts/${id}`,
            {
              method: "DELETE",
            }
          );
          getActions().getContacts(); // Refresh the contacts list after deleting a contact
        } catch (error) {
          console.log("Error deleting contact:", error);
        }
      },

      updateContact: async (contact) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/maikel_cardenas/contacts/${contact.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contact),
            }
          );

          if (response.ok) {
            getActions().getContacts(); // Refresh the contacts list after updating a contact
          }
        } catch (error) {
          console.log("Error updating contact:", error);
        }
      },

      saveContact: (contact)=>{
        console.log(contact);
        setStore({contact: contact})
      }

    },
  };
};

export default getState;
