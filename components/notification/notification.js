/**
 * Creates and displays a notification component with customizable content.
 * @param {Object} options - Notification options.
 * @param {string} [options.image="/assets/svg/category icon custom.svg"] - Image source for the notification.
 * @param {string} [options.title="title"] - Title of the notification.
 * @param {string} [options.description="description"] - Description of the notification.
 * @param {number} [options.timer=10000] - Time in milliseconds before the notification automatically closes.
 * @param {Function} [options.onClick=null] - Callback function to execute when the notification is clicked.
 * @param {string} [options.topImage=""] - Image source for the top section of the notification.
 * @param {string} [options.topText=""] - Text content for the top section of the notification.
 * @returns {HTMLDivElement} - The created notification component.
 */
const notification = ({
	image = "/assets/svg/category icon custom.svg",
	title = "title",
	description = "description",
	timer = 10000,
	onClick = null,
	topImage = "",
	topText = "",
} = {}) => {
	// Create image element for the notification
	const imageElement = document.createElement("img");
	imageElement.classList = "notificationImage";
	imageElement.src = image;

	// Create title element for the notification
	const titleElement = document.createElement("h3");
	titleElement.textContent = title;

	// Create description element for the notification
	const descriptionElement = document.createElement("p");
	descriptionElement.textContent = description;

	// Create container for title and description elements
	const notificationInfo = document.createElement("div");
	notificationInfo.classList = "notificationInfo";
	notificationInfo.append(titleElement, descriptionElement);

	// Create container for image and info elements
	const notificationSection = document.createElement("section");
	notificationSection.classList = "notificationSection";
	notificationSection.append(imageElement, notificationInfo);

	// Create wrapper for the entire notification component
	const wrapper = document.createElement("div");
	wrapper.classList = "notificationComponent";
	wrapper.append(notificationSection);

	// Add top section with image and text if provided
	if (topImage || topText) {
		const topImageElement = document.createElement("img");
		topImageElement.src = topImage;

		const topTextElement = document.createElement("p");
		topTextElement.textContent = topText;

		const topSection = document.createElement("section");
		topSection.classList = "notificationTopSection";
		topSection.append(topImageElement, topTextElement);

		// Prepend the top section to the wrapper
		wrapper.prepend(topSection);
	}

	// Add click event listener to close the notification
	wrapper.addEventListener("click", () => wrapper.remove());

	// Add custom click event listener if provided
	if (Object.is(typeof onClick, "function")) {
		wrapper.addEventListener("click", onClick);
	}

	// Append the notification component to the document body
	document.body.append(wrapper);

	// Remove the notification after a specified time if timer is provided
	if (Object.is(typeof timer, "number")) {
		setTimeout(() => wrapper?.remove(), timer);
	}

	// Return the created notification component
	return wrapper;
};

export default notification;
