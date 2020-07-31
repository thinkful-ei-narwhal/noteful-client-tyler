export const findFolder = (folders = [], folderId) =>
  folders.find((folder) => folder.id === folderId);

export const findNote = (notes = [], noteId) => {
  notes.find((note) => note.id === noteId);
};

export const getNotesForFolder = (notes = [], folderid) =>
  !folderid ? notes : notes.filter((note) => note.folder_id === folderid);

export const countNotesForFolder = (notes = [], folderid) =>
  notes.filter((note) => note.folder_id === folderid).length;
