# featherfied.com home page

The front page of featherfied.com: a list of links to the apps and project logs that live under it.

- `index.html` is the whole page. To add a project, copy one `<li>...</li>` block in the list and
  change the address, name, description and kind.
- HomeKeep has its own address, homekeep.featherfied.com (set by the `CNAME` file in the HomeKeep
  repository and a DNS record), so its saved data is walled off from every other page here.
- `CNAME` tells GitHub Pages that this repository answers at featherfied.com. Each other
  repository with Pages turned on then appears at `featherfied.com/<repository name>/`.
- `sw.js` clears out the old HomeKeep offline copy from browsers that visited when HomeKeep
  lived at the top address. It can be deleted after a few months.
