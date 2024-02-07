module.exports = async (chatId, text) => {
	try {
		const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`
		await fetch(url, {
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatId,
				text,
				parse_mode: 'MarkdownV2'
			}),
			redirect: 'follow',
			method: 'POST'
		})
		return true
	} catch (error) {
		return false
	}
}
