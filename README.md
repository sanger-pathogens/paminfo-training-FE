# PaM Informatics - Frontend Test

The purpose of the test is to assess candidates' skills working with frontend frameworks not necessarily known to them; focus: Objects and HTML elements.

## Requirements

1. Have [Node.js](https://nodejs.org/en/) installed. 
   * If you're using a mac and have Homebrew installed, you can simply run: 

      `brew install node`

2. Clone the repository:
```
git clone https://github.com/sanger-pathogens/paminfo-training-FE.git
```
3. Open the project in your IDE and run the following:

```
npm install
npm run build
npm run dev
```
4. Visit http://localhost:3000 to see your changes locally/live


## Important

The only relevant files to complete this exerise are:

- `src/routes/+page.svelte`
- `src/routes/constant_store.svelte`

There is no need to explore the rest of the contents/all the exercises can be completed by editing `src/routes/+page.svelte` (which will be rendered on http://localhost:3000)

## Exercises

1. Onclick event

- Create a button which displays a "Hello World" message each time the button gets clicked (either as via console log or alert)
- Change the style of your button: e.g. make the background black/the text white

2. Fix the bug

- A 'file_format' object is being imported from `./constant_store.svelte`, but is not properly displaying "name" property values. Troubleshoot the issue so that instead of "undefined", you see the correct object values, meaning:
```
FASTA
FASTQ
BAM
SAM
VCF
GFF
```

3. Create and Populate a table

* Using the imported `file_format` object, display all of the object properties/property values in a table. The style for the table element has already been provided in `src/routes/+page.svelte`.

