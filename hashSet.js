const HashSet = function () {
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

	const set = function (key) {
		let index = hash(key);
		let bucket = bucketStorage[index];

		for (let storedKey of bucket) {
			if (storedKey === key) { return "Key existed" };
		}

		bucket.push(key);
		size++;

		if (size > (capacity * loadFactor)) {
			capacity *= 2;
			let oldBucketStorage = bucketStorage;
			bucketStorage = new Array(capacity).fill(null).map(() => []);

			oldBucketStorage.forEach(oldBucket => {
				oldBucket.forEach(storedKey => {
					set(storedKey);
				})
			})
		}

		return "Key added";
	}

	const has = function (key) {
		let index = hash(key);
		let bucket = bucketStorage[index];

		for (let existingKey of bucket) {
			if (existingKey === key) { return true };
		}

		return false;
	}

	const remove = function (key) {
		let index = hash(key);
		let bucket = bucketStorage[index];

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i] === key) {
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

		return "Hash set cleared";
	}

	const keys = function () {
		let storedKeys = [];

		bucketStorage.forEach(bucket => {
			bucket.forEach(key => {
				storedKeys.push(key);
			})
		})

		return storedKeys;
	}

	return { set, has, remove, length, clear, keys };
}

export { HashSet };