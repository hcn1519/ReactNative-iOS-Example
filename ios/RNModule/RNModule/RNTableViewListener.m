//
//  RNTableViewListener.m
//  RNModule
//
//  Created by 홍창남 on 13/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTConvert.h>

@interface RCT_EXTERN_MODULE(RNTableViewListener, NSObject)

RCT_EXTERN_METHOD(didSelectTableViewCell:(NSInteger *)sectionIndex rowIndex:(NSInteger *)rowIndex)

RCT_EXTERN_METHOD(didSelectSectionListCell:(NSDictionary *)userInfo sectionIndex:(NSInteger *)sectionIndex rowIndex:(NSInteger *)rowIndex)

@end
//RCT_EXTERN_METHOD(getCount:(NSString)name withAge:(NSNumber)age)
//func getCount(_ name: NSString, withAge age: NSNumber) {...}

//func decrement(
//               _ resolve: RCTPromiseResolveBlock,
//               rejecter reject: RCTPromiseRejectBlock
//               ) -> Void {
//RCT_EXTERN_METHOD(
//                  decrement: (RCTPromiseResolveBlock)resolve
//                  rejecter: (RCTPromiseRejectBlock)reject
//                  )
//CalendarManager.addEvent('Birthday Party', {
//location: '4 Privet Drive, Surrey',
//time: date.getTime(),
//description: '...',
//});

//@objc func download(_ fileUrl: String, callback: RCTResponseSenderBlock) -> Void
//
//# Bridging module
//RCT_EXTERN_METHOD(download:(NSString*)fileUrl callback:(RCTResponseSenderBlock))
