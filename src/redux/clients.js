export const getClients = ({ clients }) => clients;
export const getClientsPL = ({clients_pl}) => clients_pl;

export const clientsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export const clientsPLReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
