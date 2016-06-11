# magnet2list
magnet2list is a small tool which converts a magnet link to a tracker list.
## Why?
The Transmission bittorrent client (maybe others too) doesn't automatically add the additional trackers (if any) from a magnet link to an already existing torrent. You just get the message `Couldn't add duplicate torrent`, and you have to add the additional trackers manually.
That's why I coded magnet2list, to easyly extract the trackers from a magnet link.
You just have to copy & paste.
## Example scenario
Say you added a torrent to Transmission. The torrent file/magnet link included the trackers `a` and `b`.
Now, both trackers are not working, or you just want to add more trackers for more seeders/peers.
You searched the web and found a magnet link for the same torrent (same hash) but with more trackers. (`a`, `b`, `c`, `d`)
If you click the magnet link, Transmission won't add the additional trackers (`c`, `d`) to the torrent.
You just get the message `Couldn't add duplicate torrent`.
With magnet2list you can extract the trackers from the magnet link, and copy & paste them to the torrent in Transmission.
## License
magnet2list is licensed under the [MIT License](https://github.com/hutstep/magnet2list/blob/master/LICENSE).
