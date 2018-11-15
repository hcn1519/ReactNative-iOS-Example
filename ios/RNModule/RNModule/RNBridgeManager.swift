//
//  RNBridgeManager.swift
//  RNModule
//
//  Created by 홍창남 on 11/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import Foundation
import React

class RNBridgeManager {
    static let `default` = RNBridgeManager()
    
    let bridge: RCTBridge
    
    init() {
        self.bridge = RCTBridge(delegate: ReactNativeBridgeDelegate(), launchOptions: nil)
    }
}

class ReactNativeBridgeDelegate: NSObject, RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -> URL! {
        #if targetEnvironment(simulator)
        return URL(string: "http://localhost:8081/index.bundle?platform=ios")
        #else
        return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
        #endif
    }
}
