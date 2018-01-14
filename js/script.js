//quotes are multiple strings that need to be stored in an array.
//Every time the button gets pressed, a random whole number needs to be generated.
//The number will be used as a representation of the array index number for the quote array.
//Once we retrieve the randomly picked quote from the array using our randomly generated whole number, we will place it to the HTML document.
var quotes = [
'If you want to achieve greatness stop asking for permission. ~Anonymous',
'Things work out best for those who make the best of how things work out. ~John Wooden',
'To live a creative life, we must lose our fear of being wrong. ~Anonymous',
'If you are not willing to risk the usual you will have to settle for the ordinary. ~Jim Rohn',
'Trust because you are willing to accept the risk, not because it\’s safe or certain. ~Anonymous',
'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. ~Swami Vivekananda',
'All our dreams can come true if we have the courage to pursue them. ~Walt Disney',
'Good things come to people who wait, but better things come to those who go out and get them. ~Anonymous',
'If you do what you always did, you will get what you always got. ~Anonymous',
'Success is walking from failure to failure with no loss of enthusiasm. ~Winston Churchill',
'Just when the caterpillar thought the world was ending, he turned into a butterfly. ~Proverb',
'Successful entrepreneurs are givers and not takers of positive energy. ~Anonymous',
'Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them. ~Vaibhav Shah',
'Opportunities don\’t happen, you create them. ~Chris Grosser',
'Try not to become a person of success, but rather try to become a person of value. ~Albert Einstein',
'Great minds discuss ideas; average minds discuss events; small minds discuss people. ~Eleanor Roosevelt',
'I have not failed. I’ve just found 10,000 ways that won\’t work. ~Thomas A. Edison',
'If you don\’t value your time, neither will others. Stop giving away your time and talents- start charging for it. ~Kim Garst',
'A successful man is one who can lay a firm foundation with the bricks others have thrown at him. ~David Brinkley',
'No one can make you feel inferior without your consent. ~Eleanor Roosevelt',
'The whole secret of a successful life is to find out what is one\’s destiny to do, and then do it. ~Henry Ford',
'If you\’re going through hell keep going. ~Winston Churchill',
'The ones who are crazy enough to think they can change the world, are the ones that do. ~Anonymous',
'Don\’t raise your voice, improve your argument. ~Anonymous',
'What seems to us as bitter trials are often blessings in disguise.~ Oscar Wilde',
'The meaning of life is to find your gift. The purpose of life is to give it away. ~Anonymous',
'The distance between insanity and genius is measured only by success. ~Bruce Feirstein',
'When you stop chasing the wrong things you give the right things a chance to catch you. ~Lolly Daskal',
'Don\’t be afraid to give up the good to go for the great. ~John D. Rockefeller',
'No masterpiece was ever created by a lazy artist.~ Anonymous',
'Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you. ~Nathaniel Hawthorne',
'If you can\’t explain it simply, you don\’t understand it well enough. ~Albert Einstein',
'Blessed are those who can give without remembering and take without forgetting. ~Anonymous',
'Do one thing every day that scares you. ~Anonymous',
'What\’s the point of being alive if you don\’t at least try to do something remarkable. ~Anonymous',
'Life is not about finding yourself. Life is about creating yourself. ~Lolly Daskal',
'Nothing in the world is more common than unsuccessful people with talent. ~Anonymous',
'Knowledge is being aware of what you can do. Wisdom is knowing when not to do it. ~Anonymous',
'Your problem isn\’t the problem. Your reaction is the problem. ~Anonymous',
'You can do anything, but not everything. ~Anonymous',
'Innovation distinguishes between a leader and a follower. ~Steve Jobs',
'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. ~Ray Goforth',
'Thinking should become your capital asset, no matter whatever ups and downs you come across in your life. ~Dr. APJ Kalam',
'I find that the harder I work, the more luck I seem to have. ~Thomas Jefferson',
'The starting point of all achievement is desire. ~Napolean Hill',
'Success is the sum of small efforts, repeated day-in and day-out. ~Robert Collier',
'If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work. ~Thomas J. Watson',
'All progress takes place outside the comfort zone. ~Michael John Bobak',
'You may only succeed if you desire succeeding; you may only fail if you do not mind failing. ~Philippos',
'Courage is resistance to fear, mastery of fear - not absense of fear. ~Mark Twain'
];

function newQuote() {
	jQuery('#quoteDisplay').hide();
	var randomNumber = Math.floor(Math.random() *(quotes.length));
	var currentQuote = quotes[randomNumber];
	jQuery('#quoteDisplay').text(currentQuote);
	jQuery('#quoteDisplay').fadeIn(1000);
};
! function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, "script", "twitter-wjs");



