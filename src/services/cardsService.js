import http from "./httpService";
import config from "../config.json";

export function createCard(card) {
  return http.post(`${config.apiUrl}/cards`, card);
}

export function getMyPortfolio() {
  return http.get(`${config.apiUrl}/cards/my-portfolio`);
}

export function getCard(id) {
  return http.get(`${config.apiUrl}/cards/${id}`);
}

export function editCard(card) {
  const cardId = card._id;
  delete card._id;
  return http.put(`${config.apiUrl}/cards/${cardId}`, card);
}

export function deleteCard(id) {
  return http.delete(`${config.apiUrl}/cards/${id}`);
}

const cardService = {
  deleteCard,
  getCard,
  createCard,
  getMyPortfolio,
  editCard,
};

export default cardService;
