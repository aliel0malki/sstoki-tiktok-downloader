import { persisted } from "svelte-local-storage-store";

export const credits = persisted("credits", {
  remaining: 15,
});
