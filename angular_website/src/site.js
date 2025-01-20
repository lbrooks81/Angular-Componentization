document.addEventListener('DOMContentLoaded', () =>
{
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	document.querySelectorAll('[data-toggle="tooltip"]').forEach((tooltip) =>
	{
		new bootstrap.Tooltip(tooltip);
	});

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	window.addEventListener('scroll', function ()
	{
		const scroll = window.scrollY;
		if (scroll >= 100)
		{
			document.getElementById("btn-back-to-top").style.display = "block";
		}
		else
		{
			document.getElementById("btn-back-to-top").style.display = "none";
		}
	});

	document.getElementById("btn-back-to-top").addEventListener("click",  () =>
	{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
});