const HashMap = function () {
	const loadFactor = 0.75;
	let capacity = 16;
	let size = 0;
	let bucketStorage = new Array(capacity).fill(null).map(() => []);

	const hash = function (key) {
		let hashCode = 0;
		const primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode += primeNumber * hashCode + key.charCodeAt(i);
		}

		return (hashCode % capacity);
	}

	const set = function (key, value) {
		let index = hash(key);
		let bucket = bucketStorage[index];

		for (let pair of bucket) {
      		if (pair[0] === key) {
        		pair[1] = value;
        		return "Value updated";
      		}
    	}

		bucket.push([key, value]);
		size++;

		if (size > (capacity * loadFactor)) {
			capacity *= 2;
			let oldBucketStorage = bucketStorage;
			bucketStorage = new Array(capacity).fill(null).map(() => []);
			size = 0;

			oldBucketStorage.forEach(oldBucket => {
				oldBucket.forEach(([key, value]) => {
					set(key, value);
				})
			})
		}
	}

	const get = function (key) {
		let index = hash(key);
		let bucket = bucketStorage[index];

		for (let [existingKey, existingValue] of bucket) {
      		if (existingKey === key) return existingValue;
   		}

		return null;
	}

	const has = function (key) {
		let index = hash(key);
		let bucket = bucketStorage[index];

		for (let [existingKey, existingValue] of bucket) {
      		if (existingKey === key) return true;
   		}

		return false;
	}

	const remove = function (key) {
		let index = hash(key);
		let bucket = bucketStorage[index];
		let isRemoved = false;

		for (let i = 0; i < bucket.length; i++) {
  			if (bucket[i][0] === key) {
    			bucket.splice(i, 1);
    			size--;

    			return true;
  			}
		}
		
		return false;
	}

	const length = function () {
		return size;
	}

	const clear = function () {
		bucketStorage = new Array(16).fill(null).map(() => []);
		size = 0;

		return "Hash map cleared";
	}

	const keys = function () {
		let storedKeys = [];

		bucketStorage.forEach(bucket => {
			bucket.forEach(([key, value]) => {
				storedKeys.push(key);
			})
		})

		return storedKeys;
	}

	const values = function () {
		let storedValues = [];

		bucketStorage.forEach(bucket => {
			bucket.forEach(([key, value]) => {
				storedValues.push(value);
			})
		})

		return storedValues;
	}

	const entries = function () {
		let storedEntries = [];

		bucketStorage.forEach(bucket => {
			bucket.forEach(([key, value]) => {
				storedEntries.push([key, value]);
			})
		})

		return storedEntries;
	}

	return { set, get, has, remove, length, clear, keys, values, entries };
}

export { HashMap };