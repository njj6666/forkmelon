import kNN

#create a dataset for demo purpose, more data more accurate
group, labels = kNN.createDataSet()

#the data to be classified, it can be contain arbitary properties, as long as equal to your data set
pendingData = [1,2,3]

catlog = kNN.classify0(pendingData,group,labels,3)

print(catlog)
