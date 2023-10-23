
export function storageName(name: string) {

  if (name !== "") {
    localStorage.setItem("StorageName", name);
  }

  const savedName = localStorage.getItem("StorageName") || "пусто";
  return savedName;
}

export function storageEmail(email: string) {

  if (email !== "") {
    localStorage.setItem("StorageEmail", email);
  }

  const savedEmail = localStorage.getItem("StorageEmail") || "пусто";
  return savedEmail;
}



