import { Events } from "./js/Events.js";
import { UpdateListHtml } from "./js/UpdateListHtml.js";
import { DataParticipantes } from "./js/Data.js";

const data = DataParticipantes.getData();

new UpdateListHtml().updateListHtml(data);

Events.formSubmit();