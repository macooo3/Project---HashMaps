HashMap project
for the the map Array must set to empty then create a new size for array to load factor
bucket size increase based on if the keys fill up the array and if it does we double the size by creating copy of current bucket
then create a new bucket with new size 
push the copy bucket values into the new one
   for (const bucket of oldBuckets) {
      if (bucket) {
        let current = bucket;
        while (current) {
          set(current.key, current.value);
          current = current.next;
        }
      }
    }
