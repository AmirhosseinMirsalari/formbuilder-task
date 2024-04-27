function timestampToJalali(timestamp: number): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const jalaliDate = date.toLocaleDateString("fa-IR", options);
  const parts = jalaliDate.split("/");
  const formattedDate = `${parts[0]}/${parts[1]}/${parts[2]}`; // تغییر ترتیب اجزای تاریخ به شکل دلخواه
  return formattedDate.replace(/-/g, "/"); // جایگزینی تمامی '-' ها با '/'
}

export default timestampToJalali;
