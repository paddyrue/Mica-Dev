 // Prüfung ob die userId auch das Inserat erstellt hat
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}
