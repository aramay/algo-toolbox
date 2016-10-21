# n = gets.strip.to_i

entry = gets.split(' ')

p entry

phone_book = {}

entry.each_slice(2) do |key, value|
	p key, value
	# pb = s[index..index+1]

	phone_book[key] = value
end

p phone_book
