# Running updates
There are two ways of updating imagineRio's contents: 

## Scenario 1: Updating metadata only
If there's only changes in image metadata, or new viewcones were added by other methods and you need to create manifests for these items, simply navigate to [this page](https://github.com/imaginerio/imaginerio-etl/actions/workflows/update.yaml) and click on "Run workflow". Please note that you must be logged in into an account with the relevant permissions for this to work.

That's it! The workflow will automatically pull data from JSTOR and trigger the manifest creation/update.

## Scenario 2: Adding new viewcones via KML files
If you want to ingest new viewcones into the ArcGIS geodatabase, press "." while on this page. This will open Github web editor. 

Navigate to the `input/kmls` folder in the left panel, then drag-and-drop your new KML files into it.

On the far-left of the screen there are tabs with icons. Hovering over each icon will show the tab's name. Go to "Source Control", the one with dots connected by lines.

In the text field at the top, enter a message such as "Add new KMLs", or "Add Thomas Ender KMLs" if you want to be more specific. Then click on "Commit and Push" below.

The workflow will proceed to fetch JSTOR's data, import the viewcones into ArcGIS and update the IIIF manifests.

## Monitoring progress

If you want to monitor the run progress navigate to this [dashboard](https://github.com/imaginerio/imaginerio-etl/actions/workflows/update.yaml), select the latest run and click on the 'build-and-run' box to see the logs.
