# Introduction

“Internationalization (i18n) is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes. Localization (l10n) is the process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text.”
—Wikipedia

## Formatting

### Number Format

### Currency Format

### Date Formats

Dates are displayed in the format of the user's locale. The following predefined formats are available:

Name | Example
---- | -------
Medium | Sep 3, 2010 12:05:08 PM
Short | 9/3/10 12:05 PM
Full Date | Friday, September 3, 2010
Long Date | September 3, 2010
Medium Date | Sep 3, 2010
Short Date | 9/3/10
Medium Time | 12:05:08 PM
Short Time | 12:05 PM



## Text Length and Size Expansion Considerations
    
When UI text gets translated into another language, the text length often changes. 
For example, English is a very compact language, leading to longer translated text in most cases.

The general rule for text expansion is: “the shorter the English text, the longer the translated text 
is likely to be”. The following table shows the average text expansion rate for different English text 
lengths from [IBM’s localization guidelines](http://www-01.ibm.com/software/globalization/guidelines/a3.html):

Language | Message Text | Length | Expansion
-------- | ------------ | ------ | ---------
English	| Set the power switch to 0. | 26 chars | -
French | Placez l'interrupteur de tension à 0. | 37 chars | 42% more characters
Spanish	| Ponga el interruptor de alimentación de corriente en 0. |	55 chars | 112% more characters
