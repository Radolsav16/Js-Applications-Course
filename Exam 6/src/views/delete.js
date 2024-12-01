import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { page } from "../lib/pageI.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";

export async function deletePageView() {
  const result = confirm("Do you want to delete hero ?");

  if (result) {
    await api.del(itemEndpoins.id(getItemId()));
    page.redirect("/dashboard");
  }
  return;
}
