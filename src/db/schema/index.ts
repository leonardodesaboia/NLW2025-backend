// Barrel file (um arquivo que reexporta todos os arquivos da pasta schema)
import { audioChunks } from "./audio-chunks.ts"
import { questions } from "./questions.ts"
import { rooms } from "./rooms.ts"


export const schema = {
    rooms,
    questions,
    audioChunks
}