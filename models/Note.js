import { Schema, model, models } from 'mongoose';

const NotesSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  note: {
    type: String,
    required: [true, 'Note is required.'],
  },
  summary: {
    type: String,
    required: [true, 'summary is required.'],
  }
});

const Note = models.Note || model('Note', NotesSchema);

export default Note;