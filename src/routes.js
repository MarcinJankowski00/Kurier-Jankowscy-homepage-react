export const toStart = () => "/";
export const toSchedule = () => "/rozklad-jazdy";
export const toOffer = () => "/oferta";
export const toFleat = () => "/flota";
export const toAboutUs = () => "/o-nas";
export const toContact = () => "/kontakt";
export const toMyTickets = () => "/moje-bilety";
export const toBuyTicket = () => "/kup-bilet";
export const toMyData = () => "/moje-dane";
export const toSuccess = () => "/success";
export const toCancel= () => "/cancel";

export const toMessage = ({ id } = { id: ":id" }) => `/${id}`;
export const toVechicle = ({ id } = { id: ":id" }) => `/flota/${id}`;