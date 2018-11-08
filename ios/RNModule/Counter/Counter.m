//
//  Counter.m
//  RNModule
//
//  Created by 홍창남 on 09/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)

RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(passMultipleData: (RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(decrement: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject)
@end
